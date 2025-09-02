
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              Digital Factory
            </h3>
            <p className="text-gray-300 mb-4">
              디지털 날염, 3D 캡쳐를 통해 상상속의 디자인을 현실로 만들어드립니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-map-pin-line mr-2 text-blue-400"></i>
                <span className="text-sm">인천광역시 부평구 청천동 424-12 (우:403-030)</span>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line mr-2 text-blue-400"></i>
                <span className="text-sm">010-3084-5340</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-2 text-blue-400"></i>
                <span className="text-sm">AM 08:30 ~ PM 05:30</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">주요 서비스</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white transition-colors">폴리원단 프린팅</li>
              <li className="cursor-pointer hover:text-white transition-colors">피스 원단 전사</li>
              <li className="cursor-pointer hover:text-white transition-colors">면원단 프린팅</li>
              <li className="cursor-pointer hover:text-white transition-colors">실크원단 프린팅</li>
              <li className="cursor-pointer hover:text-white transition-colors">나일론원단 프린팅</li>
              <li className="cursor-pointer hover:text-white transition-colors">티셔츠 프린팅</li>
              <li className="cursor-pointer hover:text-white transition-colors">3.3미터 현수막</li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">사업자 정보</h4>
            <div className="space-y-2 text-gray-300">
              <p>대표: 홍성수</p>
              <p>사업자등록번호: 107-19-18652</p>
              <div className="mt-4">
                <h5 className="font-medium mb-2">계좌번호 안내</h5>
                <p className="text-sm">기업은행 540-020854-04-014</p>
                <p className="text-sm">예금주: 홍성수 디지털팩토리</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2013 Digital Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
