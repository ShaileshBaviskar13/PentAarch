import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
              <p className="text-blue-100">Enter your email to receive reset instructions</p>
            </div>
            
            {/* Form */}
            <div className="px-8 py-6">
              <ForgotPasswordForm />
            </div>
            
            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{' '}
                <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
