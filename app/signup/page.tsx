import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignupForm from './SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Join PentaArch</h1>
              <p className="text-blue-100">Create your account to get started</p>
            </div>
            
            {/* Form */}
            <div className="px-8 py-6">
              <SignupForm />
            </div>
            
            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
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
