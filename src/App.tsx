import React, { useState } from 'react';

// Define the type for an experiment
interface Experiment {
  name: string;
  description: string;
  iceScore: string;
  impact: number;
  confidence: number;
  ease: number;
}

export default function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // Specify the type of the experiments array
  const [experiments, setExperiments] = useState<Experiment[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting:', { name, description });
    
    // Add to experiments
    setExperiments([
      ...experiments,
      {
        name,
        description,
        iceScore: '7.5', // Mock score for testing
        impact: 7,
        confidence: 8,
        ease: 7
      }
    ]);

    // Clear form
    setName('');
    setDescription('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Growth Experiment Tracker</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Experiment Name"
            style={{ 
              width: '100%',
              padding: '8px',
              marginBottom: '10px'
            }}
          />
          
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            style={{ 
              width: '100%',
              padding: '8px',
              height: '100px'
            }}
          />
        </div>
        
        <button type="submit">
          Add Experiment
        </button>
      </form>

      {experiments.length > 0 && (
        <table style={{ width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>ICE Score</th>
            </tr>
          </thead>
          <tbody>
            {experiments.map((exp, index) => (
              <tr key={index}>
                <td>{exp.name}</td>
                <td>{exp.description}</td>
                <td>{exp.iceScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}