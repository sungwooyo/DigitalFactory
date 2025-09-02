
export default function ServicesSection() {
  const services = [
    {
      title: 'T-shirt(DTG) 출력',
      description: '폴리/면/T/C/사카모 T-shirt에 직접 날염. 검정, 형광색도 우선 T-shirt OK',
      icon: 'ri-t-shirt-line',
      image: 'https://readdy.ai/api/search-image?query=High%20quality%20digital%20t-shirt%20printing%20process%2C%20DTG%20direct%20to%20garment%20printing%20machine%2C%20colorful%20printed%20t-shirts%20hanging%2C%20professional%20textile%20printing%20workshop%2C%20bright%20clean%20environment%2C%20detailed%20fabric%20texture&width=400&height=300&seq=tshirt-printing&orientation=landscape'
    },
    {
      title: 'PVC(인조가죽) 출력',
      description: '가죽 재질용 PVC 제품 각종 원단 및 Top coating 기능 재현 가능',
      icon: 'ri-handbag-line',
      image: 'https://readdy.ai/api/search-image?query=Premium%20PVC%20artificial%20leather%20printing%2C%20luxury%20handbag%20materials%2C%20synthetic%20leather%20with%20beautiful%20patterns%2C%20high-end%20fashion%20accessories%2C%20professional%20textile%20printing%2C%20rich%20textures%20and%20colors&width=400&height=300&seq=pvc-printing&orientation=landscape'
    },
    {
      title: '벨벳, 스웨드, Wool 날염',
      description: '기모가 많은 벨벳, 스웨드, 천연 Wool, 모직도 미싱할 것 없이 종이에 인쇄하듯 선명한 날염 가능',
      icon: 'ri-shirt-line',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20velvet%20wool%20fabric%20printing%2C%20soft%20textured%20materials%2C%20high-end%20fabric%20with%20intricate%20patterns%2C%20professional%20textile%20printing%2C%20premium%20quality%20fabrics%2C%20rich%20colors%20and%20textures&width=400&height=300&seq=velvet-printing&orientation=landscape'
    },
    {
      title: '3.3m 초대폭 침창구/커튼 날염',
      description: '침창구, 커튼, 브라인드, 벽지, 초대폭 원단에 100% 친환경적인 피그먼트/분산/반응염료로 날염',
      icon: 'ri-home-4-line',
      image: 'https://readdy.ai/api/search-image?query=Large%20format%20curtain%20printing%2C%20wide%20textile%20printing%20machine%2C%20home%20decor%20fabrics%2C%20interior%20design%20materials%2C%20colorful%20curtains%20and%20blinds%2C%20professional%20textile%20workshop&width=400&height=300&seq=curtain-printing&orientation=landscape'
    },
    {
      title: 'PP/PE/Tyvek/Nylon 프린팅',
      description: '방수/내구성이 강한 소재로 나일론, PE원단, Tyvek, 부직포 원단 인쇄 당일 출고',
      icon: 'ri-shield-line',
      image: 'https://readdy.ai/api/search-image?query=Waterproof%20nylon%20fabric%20printing%2C%20durable%20synthetic%20materials%2C%20industrial%20textile%20printing%2C%20high-performance%20fabrics%2C%20technical%20textiles%2C%20professional%20printing%20facility&width=400&height=300&seq=nylon-printing&orientation=landscape'
    },
    {
      title: '종이 전사',
      description: '6색/8색/형광 출력가능, 정확한 컬러 관리기술 보유',
      icon: 'ri-file-paper-line',
      image: 'https://readdy.ai/api/search-image?query=Paper%20transfer%20printing%20process%2C%20heat%20transfer%20papers%2C%20vibrant%20color%20printing%2C%20professional%20color%20management%2C%20printing%20equipment%20with%20multiple%20color%20capabilities&width=400&height=300&seq=paper-transfer&orientation=landscape'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">전문 프린팅 서비스</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 원단과 소재에 최고 품질의 디지털 프린팅 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
