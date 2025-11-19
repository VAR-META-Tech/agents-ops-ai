import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Cloud,
  Eye,
  EyeOff,
  Trash,
} from "lucide-react";
import agentOpsLogo from "./svg/agentsops-logo.svg";
import aiAgentsPlusIcon from "./svg/ai-agents-plus.svg";
import arrowDownIcon from "./svg/arrow-down.svg";
import arrowTopRightWhiteIcon from "./svg/arrow-top-right-white.svg";
import arrowUpRightIcon from "./svg/arrow-up-right.svg";
import buildingIcon from "./svg/building-black.svg";
import codepenIcon from "./svg/codepen-icon.svg";
import cursorClickBlackIcon from "./svg/cursor-click-black.svg";
import cursorClickIcon from "./svg/cursor-click-icon.svg";
import cursorClickWhiteIcon from "./svg/cursor-click-white-icon.svg";
import dataIcon from "./svg/data-icon.svg";
import file from "./svg/file.svg";
import github from "./svg/github.svg";
import globe from "./svg/globe.svg";
import google from "./svg/google.svg";
import locationIcon from "./svg/location-icon.svg";
import microsoft from "./svg/microsoft.svg";
import phoneIcon from "./svg/phone-icon.svg";
import questionBookIcon from "./svg/question-book-icon.svg";
import searchBookIcon from "./svg/search-book-icon.svg";
import slidersIcon from "./svg/sliders-icon.svg";
import slidersWhiteIcon from "./svg/sliders-white-icon.svg";
import terminalIcon from "./svg/terminal-icon.svg";
import terminalSquareIcon from "./svg/terminal-square-icon.svg";
import uploadIcon from "./svg/upload-black.svg";
import window from "./svg/window.svg";
import zapFastIcon from "./svg/zap-fast-black.svg";

const IconList = {
  agentOpsLogo,
  arrowUpRightIcon,
  arrowTopRightWhiteIcon,
  arrowDownIcon,
  aiAgentsPlusIcon,
  zapFastIcon,
  uploadIcon,
  buildingIcon,
  questionBookIcon,
  terminalIcon,
  cursorClickBlackIcon,
  slidersIcon,
  cursorClickIcon,
  codepenIcon,
  dataIcon,
  searchBookIcon,
  slidersWhiteIcon,
  terminalSquareIcon,
  cursorClickWhiteIcon,
  locationIcon,
  phoneIcon,
  window,
  google,
  microsoft,
  github,
  globe,
  file,
  eye: Eye,
  eyeOff: EyeOff,
  trash: Trash,
  cloud: Cloud,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
