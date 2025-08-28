import AppRoutes from './routes/AppRoutes';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className='overflow-x-hidden'>
      <AppRoutes />
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
