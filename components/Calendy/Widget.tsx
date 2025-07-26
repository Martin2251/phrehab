"use client"
import { InlineWidget } from "react-calendly";

interface CalendlyWidgetProps {
  url: string; // Your Calendly scheduling URL
  height?: number;
  
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  url, 
  height = 630
  
}) => {
  return (
    <div className="calendly-container my-8" >
      <InlineWidget
        url={url}
        styles={{
          height: `${height}px`,
          width: '100%',
        }}
      />
    </div>
  );
};

export default CalendlyWidget;