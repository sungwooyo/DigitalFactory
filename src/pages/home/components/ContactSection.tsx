
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">문의하기</h2>
          <p className="text-xl text-gray-300">
            디지털 프린팅에 대한 궁금한 점이 있으시면 언제든 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">연락처 정보</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">전화번호</h4>
                  <p className="text-gray-300">010-3084-5340</p>
                  <p className="text-sm text-gray-400">AM 08:30 ~ PM 05:30</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">주소</h4>
                  <p className="text-gray-300">인천광역시 부평구 청천동 424-12</p>
                  <p className="text-sm text-gray-400">(우편번호: 403-030)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-bank-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">계좌번호</h4>
                  <p className="text-gray-300">기업은행 540-020854-04-014</p>
                  <p className="text-sm text-gray-400">예금주: 홍성수 디지털팩토리</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-user-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">대표자</h4>
                  <p className="text-gray-300">홍성수</p>
                  <p className="text-sm text-gray-400">사업자등록번호: 107-19-18652</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-600 rounded-lg">
              <h4 className="font-semibold mb-2">긴급 문의</h4>
              <p className="text-blue-100 mb-4">당일 출고나 긴급한 프린팅 작업이 필요하시면 전화로 직접 연락주세요.</p>
              <div className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                <span className="font-medium">010-3084-5340</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">견적 문의</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">성함 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="성함을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">연락처 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="연락처를 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">관심 서비스</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-8 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">서비스를 선택해주세요</option>
                  <option value="tshirt">T-shirt 프린팅</option>
                  <option value="fabric">원단 프린팅</option>
                  <option value="banner">현수막 제작</option>
                  <option value="curtain">커튼/침구류</option>
                  <option value="pvc">PVC/인조가죽</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">문의내용 *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="프린팅하실 원단, 수량, 크기, 납기일 등 자세한 내용을 적어주세요 (최대 500자)"
                />
                <div className="text-right text-sm text-gray-400 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <i className="ri-send-plane-line mr-2"></i>
                견적 문의하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
