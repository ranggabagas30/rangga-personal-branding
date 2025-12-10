import { Clock, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <div className="space-y-6">
      {/* Bio */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Bio</h3>
          <span className="text-gray-500">2</span>
        </div>
        <div className="space-y-3 text-gray-700">
          <p>Senior Mobile Engineer</p>
          <p>7+ years of experience</p>
        </div>
      </div>

      {/* Hours per week */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3">Hours per week</h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">As Needed - Open to Offers</span>
          <Clock className="w-4 h-4 text-gray-400" />
        </div>
        <div className="mt-2">
          <span className="inline-block px-3 py-1 bg-gray-900 text-white rounded-full text-sm">
            30+
          </span>
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3">Languages</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-900">English</div>
              <div className="text-gray-500 text-sm">Conversational</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-900">Indonesian</div>
              <div className="text-gray-500 text-sm">Native or Bilingual</div>
            </div>
          </div>
        </div>
      </div>

      {/* Verifications */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3">Verifications</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
              <span className="text-green-600 text-xs">✓</span>
            </div>
            <span>ID Verified</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-600 text-xs">✓</span>
            </div>
            <span>Phone Verified</span>
          </div>
        </div>
      </div>

      {/* Licenses */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3">Licenses</h3>
        <div className="space-y-3">
          <div>
            <div className="text-gray-900">Android Associate</div>
            <div className="text-gray-500 text-sm">2022 - present</div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3">Education</h3>
        <div className="space-y-2">
          <div className="text-gray-900">Universitas Pamulang (Jaya-Machoo Weifuiio)</div>
          <div className="text-gray-600">Bachelor of Computer Science</div>
          <div className="text-gray-500 text-sm">Bachelor of Engineering (B.Eng)</div>
          <div className="text-gray-500 text-sm">2011 - 2016</div>
        </div>
      </div>

      {/* Linked accounts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3">Linked accounts</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700">
            <Globe className="w-4 h-4" />
            <span>GitHub</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Globe className="w-4 h-4" />
            <span>Stack Overflow</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Globe className="w-4 h-4" />
            <span>LinkedIn</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Globe className="w-4 h-4" />
            <span>Dribbble</span>
          </div>
        </div>
      </div>
    </div>
  );
}
