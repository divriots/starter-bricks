import React from 'react';

export const StoryLayout = {
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: "centered" }
};