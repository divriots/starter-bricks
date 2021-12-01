import * as React from 'react';
import { Box } from '~/box';
import { Tooltip } from '~/tooltip';
import { Instance } from '@popperjs/core';

function AnchorElTooltips_() {
  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef<Instance>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <Tooltip
      title="Add"
      placement="top"
      arrow
      PopperProps={{
        popperRef,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionRef.current.x,
              areaRef.current!.getBoundingClientRect().y,
              0,
              0
            );
          },
        },
      }}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          p: 2,
        }}
      >
        Hover
      </Box>
    </Tooltip>
  );
}

export const AnchorElTooltips = () => <AnchorElTooltips_ />;
