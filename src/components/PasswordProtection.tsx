import { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

interface PasswordProtectionProps {
  onUnlock: () => void;
}

const CACHE_KEY = 'thermomix_access_granted';
const CORRECT_PASSWORD = 'eintritt';

const PasswordProtection = ({ onUnlock }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached === 'true') {
      onUnlock();
    }
  }, [onUnlock]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(CACHE_KEY, 'true');
      onUnlock();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="password-overlay">
      <div 
        className={`bg-card p-8 md:p-12 rounded-2xl shadow-elevated max-w-md w-full mx-4 animate-scale-in ${
          isShaking ? 'animate-shake' : ''
        }`}
        style={{
          animation: isShaking ? 'shake 0.5s ease-in-out' : undefined
        }}
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            Willkommen
          </h1>
          <p className="text-muted-foreground">
            Bitte geben Sie das Passwort ein, um fortzufahren.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Passwort eingeben"
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 outline-none
                ${error 
                  ? 'border-destructive bg-destructive/5' 
                  : 'border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              autoFocus
            />
            {error && (
              <p className="text-destructive text-sm mt-2 animate-fade-in">
                Falsches Passwort. Bitte versuchen Sie es erneut.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium
              transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Eintreten
          </button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Exklusiver Kundenbereich
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default PasswordProtection;
