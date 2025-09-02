
export default function FeaturesSection() {
  const features = [
    {
      title: '정교한 색상 표현',
      description: '6색/8색/형광 출력이 가능하며 정확한 컬러 관리 기술을 보유하고 있습니다',
      icon: 'ri-palette-line',
      color: 'bg-purple-500'
    },
    {
      title: '친환경 프린팅',
      description: '100% 친환경적인 피그먼트/분산/반응염료를 사용하여 안전하고 지속가능한 프린팅',
      icon: 'ri-leaf-line',
      color: 'bg-green-500'
    },
    {
      title: '3.3미터 초대폭',
      description: '업계 최대 폭 3.3m 프린팅으로 바느질 자국 없는 대형 프린팅이 가능합니다',
      icon: 'ri-ruler-line',
      color: 'bg-orange-500'
    },
    {
      title: '빠른 출고',
      description: '당일 출고 시스템으로 긴급한 주문도 신속하게 처리해드립니다',
      icon: 'ri-time-line',
      color: 'bg-blue-500'
    },
    {
      title: '다양한 소재',
      description: '폴리, 면, 실크, 나일론, 벨벳, 스웨드, PVC 등 모든 소재에 프린팅 가능',
      icon: 'ri-shirt-line',
      color: 'bg-red-500'
    },
    {
      title: '고품질 마감',
      description: '앞뒤가 똑같은 선명한 이미지 표현으로 최고 품질의 결과물을 보장합니다',
      icon: 'ri-award-line',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Factory의 강점</h2>
          <p className="text-xl text-gray-600">
            업계 최고 수준의 기술력과 품질로 고객만족을 실현합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
