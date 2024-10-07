"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [tone, setTone] = useState('');

  const countStats = (input: string) => {
    const words = input.trim().split(/\s+/).filter(word => word !== '').length;
    const chars = input.length;
    const lines = input.split('\n').length;

    setWordCount(words);
    setCharCount(chars);
    setLineCount(lines);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    countStats(newText);
  };

  const handleAIAction = async (action: string) => {
    // In a real application, you would call your OpenAI API here
    console.log(`${action} action requested. (OpenAI API call would go here)`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-lg font-semibold">Words</h3>
              <p className="text-2xl">{wordCount}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Characters</h3>
              <p className="text-2xl">{charCount}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Lines</h3>
              <p className="text-2xl">{lineCount}</p>
            </div>
          </div>
        </div>
        <textarea
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleTextChange}
          className="w-full h-64 resize-y p-2 border rounded-md dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="w-full md:w-64 space-y-4">
        <Button onClick={() => handleAIAction('Make Longer')} className="w-full">
          Make Longer
        </Button>
        <Button onClick={() => handleAIAction('Make Shorter')} className="w-full">
          Make Shorter
        </Button>
        <div className="space-y-2">
          <label htmlFor="tone-select" className="block text-sm font-medium">
            Change Tone
          </label>
          <Select onValueChange={(value) => setTone(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="friendly">Friendly</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => handleAIAction(`Change Tone to ${tone}`)} className="w-full" disabled={!tone}>
            Apply Tone
          </Button>
        </div>
        <Button onClick={() => handleAIAction('Simplify Language')} className="w-full">
          Simplify Language
        </Button>
      </div>
    </div>
  );
};

export default WordCounter;