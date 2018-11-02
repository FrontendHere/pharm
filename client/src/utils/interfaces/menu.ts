import { TooltipPosition } from '@angular/material';

export interface Tooltip {
  title: string;
  position: TooltipPosition;
}

export interface MenuItem {
  link?: string[];
  tooltip?: Tooltip;
  icon?: string;
  materialIcon?: boolean;
  active: boolean;
}
