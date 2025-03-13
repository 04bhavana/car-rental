// Auth.js
import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'} - Car Rental Application</h1>
      
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        {!isLogin && (
          <div>
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" required />
          </div>
        )}
        
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      
      {isLogin && (
        <div>
          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </div>
      )}
      
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"} 
        <a href="#" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </a>
      </p>
    </div>
  );
}

export default Login;
