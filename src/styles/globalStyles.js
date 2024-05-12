import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

:root {
    --color-blue-50: #eff6ff;
    --color-blue-100: #dbeafe;
    --color-blue-200: #bfdbfe;
    --color-blue-300: #93c5fd;
    --color-blue-400: #60a5fa;
    --color-blue-500: #3b82f6;
    --color-blue-600: #2563eb;
    --color-blue-700: #1d4ed8;
    --color-blue-800: #1e40af;
    --color-blue-900: #1e3a8a;
    --color-blue-950: #172554;

    //slate
    --color-slate-50: #f8fafc;
    --color-slate-100: #f1f5f9;
    --color-slate-200: #e2e8f0;
    --color-slate-300: #cbd5e1;
    --color-slate-400: #94a3b8;
    --color-slate-500: #64748b;

}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-familiy: 'Jost', 'sans-serif';
    }
`;

export default GlobalStyles;