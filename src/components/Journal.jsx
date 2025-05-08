import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('journalEntries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const saveEntry = () => {
    if (!entry.trim()) return;

    const newEntry = {
      id: Date.now().toString(),
      content: entry,
      date: new Date().toLocaleString(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setEntry('');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        backgroundColor: 'white',
        overflowY: 'auto'
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        📝 Daily Journal
      </Typography>

      <TextField
        multiline
        fullWidth
        minRows={4}
        placeholder="Write your thoughts..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="success"
        onClick={saveEntry}
        sx={{ mb: 3 }}
      >
        Save Entry
      </Button>

      <Box>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Previous Entries
        </Typography>
        {entries.length === 0 ? (
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'gray' }}>
            No entries yet.
          </Typography>
        ) : (
          entries.map((e) => (
            <Paper
              key={e.id}
              sx={{
                mb: 2,
                p: 2,
                borderLeft: '5px solidrgb(71, 197, 255)',
              }}
            >
              <Typography
                variant="caption"
                sx={{ display: 'block', mb: 1, color: 'gray' }}
              >
                {e.date}
              </Typography>
              <Typography variant="body1">{e.content}</Typography>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Journal;
