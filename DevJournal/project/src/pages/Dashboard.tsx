import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Calendar, 
  Edit3, 
  Trash2, 
  Save, 
  Sparkles,
  Quote,
  BarChart3,
  Activity
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';

interface Log {
  id: string;
  content: string;
  summary: string | null;
  created_at: string;
  updated_at: string;
}

export function Dashboard() {
  const { user } = useAuth();
  const [logs, setLogs] = useState<Log[]>([]);
  const [newLog, setNewLog] = useState('');
  const [editingLog, setEditingLog] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState('');
  const [summary, setSummary] = useState('');
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    if (user) {
      fetchLogs();
      fetchQuote();
    }
  }, [user]);

  const fetchLogs = async () => {
    try {
      const { data, error } = await supabase
        .from('logs')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLogs(data || []);
    } catch (error) {
      console.error('Error fetching logs:', error);
      toast.error('Failed to fetch logs');
    }
  };

  const fetchQuote = async () => {
    setLoadingQuote(true);
    try {
      // Simulate API call - replace with actual Gemini API call
      setTimeout(() => {
        const quotes = [
          "The only way to do great work is to love what you do. Keep coding!",
          "Every expert was once a beginner. Every pro was once an amateur.",
          "Code is like humor. When you have to explain it, it's bad.",
          "The best time to plant a tree was 20 years ago. The second best time is now.",
          "Programming isn't about what you know; it's about what you can figure out."
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setLoadingQuote(false);
      }, 1000);
    } catch (error) {
      setLoadingQuote(false);
      console.error('Error fetching quote:', error);
    }
  };

  const generateSummary = async () => {
    if (!logs.length) {
      toast.error('No logs to summarize');
      return;
    }

    setLoadingSummary(true);
    try {
      // Simulate API call - replace with actual Gemini API call
      setTimeout(() => {
        const latestLog = logs[0];
        const words = latestLog.content.split(' ').length;
        setSummary(`Recent learning summary: You've been focusing on ${words > 50 ? 'comprehensive' : 'focused'} learning with ${words} words of content. Your consistency is building strong foundations for growth.`);
        setLoadingSummary(false);
        toast.success('Summary generated!');
      }, 1500);
    } catch (error) {
      setLoadingSummary(false);
      console.error('Error generating summary:', error);
      toast.error('Failed to generate summary');
    }
  };

  const saveLog = async () => {
    if (!newLog.trim()) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('logs')
        .insert([
          {
            user_id: user?.id,
            content: newLog.trim(),
          },
        ])
        .select()
        .single();

      if (error) throw error;

      setLogs([data, ...logs]);
      setNewLog('');
      toast.success('Log saved successfully!');
    } catch (error) {
      console.error('Error saving log:', error);
      toast.error('Failed to save log');
    } finally {
      setLoading(false);
    }
  };

  const updateLog = async (id: string, content: string) => {
    try {
      const { error } = await supabase
        .from('logs')
        .update({ content })
        .eq('id', id);

      if (error) throw error;

      setLogs(logs.map(log => 
        log.id === id ? { ...log, content, updated_at: new Date().toISOString() } : log
      ));
      setEditingLog(null);
      setEditContent('');
      toast.success('Log updated successfully!');
    } catch (error) {
      console.error('Error updating log:', error);
      toast.error('Failed to update log');
    }
  };

  const deleteLog = async (id: string) => {
    try {
      const { error } = await supabase
        .from('logs')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setLogs(logs.filter(log => log.id !== id));
      toast.success('Log deleted successfully!');
    } catch (error) {
      console.error('Error deleting log:', error);
      toast.error('Failed to delete log');
    }
  };

  const getWeeklyData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weeklyData = days.map(day => ({
      day,
      logs: Math.floor(Math.random() * 5) + 1,
    }));
    return weeklyData;
  };

  const stats = {
    totalLogs: logs.length,
    totalWords: logs.reduce((sum, log) => sum + log.content.split(' ').length, 0),
    activeDays: Math.min(logs.length, 7),
    streak: Math.floor(Math.random() * 10) + 1,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.email?.split('@')[0]}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Track your learning journey and stay motivated
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Log Input */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Edit3 className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  What did you learn today?
                </h2>
              </div>
              
              <textarea
                value={newLog}
                onChange={(e) => setNewLog(e.target.value)}
                placeholder="Share your learning experience, insights, or challenges..."
                className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
              />
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {newLog.length} characters
                </span>
                <div className="flex space-x-3">
                  <button
                    onClick={generateSummary}
                    disabled={loadingSummary || !logs.length}
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {loadingSummary ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600 mr-2"></div>
                    ) : (
                      <Brain className="h-4 w-4 mr-2" />
                    )}
                    Summarize
                  </button>
                  <button
                    onClick={saveLog}
                    disabled={loading || !newLog.trim()}
                    className="flex items-center px-6 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg hover:from-indigo-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    ) : (
                      <Save className="h-4 w-4 mr-2" />
                    )}
                    Save Entry
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Output */}
            {summary && (
              <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center mb-3">
                  <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                    AI Summary
                  </h3>
                </div>
                <p className="text-indigo-800 dark:text-indigo-200">{summary}</p>
              </div>
            )}

            {/* Weekly Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Weekly Overview
                  </h2>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={getWeeklyData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis dataKey="day" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Bar dataKey="logs" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Log History */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Learning History
                </h2>
              </div>
              
              <div className="space-y-4">
                {logs.length === 0 ? (
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      No logs yet. Start documenting your learning journey!
                    </p>
                  </div>
                ) : (
                  logs.map((log) => (
                    <div
                      key={log.id}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(log.created_at).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setEditingLog(log.id);
                              setEditContent(log.content);
                            }}
                            className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteLog(log.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {editingLog === log.id ? (
                        <div className="space-y-3">
                          <textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="w-full h-24 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                          />
                          <div className="flex space-x-2">
                            <button
                              onClick={() => updateLog(log.id, editContent)}
                              className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => {
                                setEditingLog(null);
                                setEditContent('');
                              }}
                              className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-900 dark:text-white">{log.content}</p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Logs</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.totalLogs}
                    </p>
                  </div>
                  <BookOpen className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Words</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.totalWords}
                    </p>
                  </div>
                  <Edit3 className="h-8 w-8 text-cyan-600" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Active Days</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.activeDays}
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Streak</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.streak}
                    </p>
                  </div>
                  <Activity className="h-8 w-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Daily Quote */}
            <div className="bg-gradient-to-br from-indigo-500 to-cyan-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 mr-2" />
                <h3 className="text-lg font-semibold">Daily Motivation</h3>
              </div>
              
              {loadingQuote ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  <span>Loading inspiration...</span>
                </div>
              ) : (
                <div>
                  <p className="text-indigo-100 italic mb-4">"{quote}"</p>
                  <button
                    onClick={fetchQuote}
                    className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors"
                  >
                    New Quote
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}