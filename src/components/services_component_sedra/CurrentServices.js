// by sedra
import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";

function CurrentServices() {
  const [activeType, setActiveType] = useState();

  const services = [
    {
      id: 1,
      type: "صحية",
      title: "تحسينات كبيرة تطال خدمات النقل العمومي في المنطقة",
      date: "23/نيسان/2024",
      description:
        "بفخر نعلن عن تحسينات كبيرة في خدمة النقل العام في مدينتنا. تم توسيع شبكة الحافلات وتحسين جودة الخدمة لضمان وصول سريع ومريح للمسافرين إلى وجهاتهم. تم تصميم الجدول الزمني للحافلات بعناية لتلبية احتياجات المواطنين، مع زيادة عدد الرحلات خلال فترات الذروة وفقًا للطلب العام. كما تم تجهيز الحافلات بأحدث التقنيات لراحة الركاب، بما في ذلك مقاعد مريحة وتكييف هواء فعال. نحن ملتزمون بتوفير خدمة النقل العام الممتازة التي تعزز التنقل المريح والمستدام لجميع سكان المدينة.",
      image: img1,
    },
    {
      id: 2,
      type: "صحية",
      title: 'انطلاق مبادرة "مأكولات صحية للجميع"',
      date: "6/آذار/2024",
      description:
        'نحن سعداء بالإعلان عن إطلاق برنامج "مأكولات صحية للجميع"، الذي يهدف إلى تعزيز التغذية الصحية في مجتمعنا. سنقوم بتوفير وجبات غذائية متوازنة ومغذية للعائلات ذات الدخل المحدود، بالتعاون مع مطاعم ومنظمات محلية. سيستفيد الأطفال وكبار السن والأفراد ذوي الحاجة من هذه البرامج الغذائية المجانية. نهدف إلى تحسين صحة المجتمع وتعزيز جودة حياتهم. انضموا إلينا في هذه المبادرة الهامة لتحقيق تغذية صحية للجميع!',
      image: img2,
    },
    {
      id: 3,
      type: "إدارية",
      title: 'انطلاق مبادرة "مأكولات صحية للجميع"',
      date: "6/آذار/2024",
      description:
        'نحن سعداء بالإعلان عن إطلاق برنامج "مأكولات صحية للجميع"، الذي يهدف إلى تعزيز التغذية الصحية في مجتمعنا. سنقوم بتوفير وجبات غذائية متوازنة ومغذية للعائلات ذات الدخل المحدود، بالتعاون مع مطاعم ومنظمات محلية. سيستفيد الأطفال وكبار السن والأفراد ذوي الحاجة من هذه البرامج الغذائية المجانية. نهدف إلى تحسين صحة المجتمع وتعزيز جودة حياتهم. انضموا إلينا في هذه المبادرة الهامة لتحقيق تغذية صحية للجميع!',
      image: img2,
    },

    {
      id: 4,
      type: "إدارية",
      title: "تحسينات كبيرة تطال خدمات النقل العمومي في المنطقة",
      date: "23/نيسان/2024",
      description:
        "بفخر نعلن عن تحسينات كبيرة في خدمة النقل العام في مدينتنا. تم توسيع شبكة الحافلات وتحسين جودة الخدمة لضمان وصول سريع ومريح للمسافرين إلى وجهاتهم. تم تصميم الجدول الزمني للحافلات بعناية لتلبية احتياجات المواطنين، مع زيادة عدد الرحلات خلال فترات الذروة وفقًا للطلب العام. كما تم تجهيز الحافلات بأحدث التقنيات لراحة الركاب، بما في ذلك مقاعد مريحة وتكييف هواء فعال. نحن ملتزمون بتوفير خدمة النقل العام الممتازة التي تعزز التنقل المريح والمستدام لجميع سكان المدينة.",
      image: img1,
    },

    {
      id: 5,
      type: "بيئية",
      title: "تحسينات كبيرة تطال خدمات النقل العمومي في المنطقة",
      date: "23/نيسان/2024",
      description:
        "بفخر نعلن عن تحسينات كبيرة في خدمة النقل العام في مدينتنا. تم توسيع شبكة الحافلات وتحسين جودة الخدمة لضمان وصول سريع ومريح للمسافرين إلى وجهاتهم. تم تصميم الجدول الزمني للحافلات بعناية لتلبية احتياجات المواطنين، مع زيادة عدد الرحلات خلال فترات الذروة وفقًا للطلب العام. كما تم تجهيز الحافلات بأحدث التقنيات لراحة الركاب، بما في ذلك مقاعد مريحة وتكييف هواء فعال. نحن ملتزمون بتوفير خدمة النقل العام الممتازة التي تعزز التنقل المريح والمستدام لجميع سكان المدينة.",
      image: img1,
    },
    {
      id: 6,
      type: "بيئية",
      title: 'انطلاق مبادرة "مأكولات صحية للجميع"',
      date: "6/آذار/2024",
      description:
        'نحن سعداء بالإعلان عن إطلاق برنامج "مأكولات صحية للجميع"، الذي يهدف إلى تعزيز التغذية الصحية في مجتمعنا. سنقوم بتوفير وجبات غذائية متوازنة ومغذية للعائلات ذات الدخل المحدود، بالتعاون مع مطاعم ومنظمات محلية. سيستفيد الأطفال وكبار السن والأفراد ذوي الحاجة من هذه البرامج الغذائية المجانية. نهدف إلى تحسين صحة المجتمع وتعزيز جودة حياتهم. انضموا إلينا في هذه المبادرة الهامة لتحقيق تغذية صحية للجميع!',
      image: img2,
    },
    {
      id: 7,
      type: "فنية",
      title: 'انطلاق مبادرة "مأكولات صحية للجميع"',
      date: "6/آذار/2024",
      description:
        'نحن سعداء بالإعلان عن إطلاق برنامج "مأكولات صحية للجميع"، الذي يهدف إلى تعزيز التغذية الصحية في مجتمعنا. سنقوم بتوفير وجبات غذائية متوازنة ومغذية للعائلات ذات الدخل المحدود، بالتعاون مع مطاعم ومنظمات محلية. سيستفيد الأطفال وكبار السن والأفراد ذوي الحاجة من هذه البرامج الغذائية المجانية. نهدف إلى تحسين صحة المجتمع وتعزيز جودة حياتهم. انضموا إلينا في هذه المبادرة الهامة لتحقيق تغذية صحية للجميع!',
      image: img2,
    },
    {
      id: 8,
      type: "فنية",
      title: "تحسينات كبيرة تطال خدمات النقل العمومي في المنطقة",
      date: "23/نيسان/2024",
      description:
        "بفخر نعلن عن تحسينات كبيرة في خدمة النقل العام في مدينتنا. تم توسيع شبكة الحافلات وتحسين جودة الخدمة لضمان وصول سريع ومريح للمسافرين إلى وجهاتهم. تم تصميم الجدول الزمني للحافلات بعناية لتلبية احتياجات المواطنين، مع زيادة عدد الرحلات خلال فترات الذروة وفقًا للطلب العام. كما تم تجهيز الحافلات بأحدث التقنيات لراحة الركاب، بما في ذلك مقاعد مريحة وتكييف هواء فعال. نحن ملتزمون بتوفير خدمة النقل العام الممتازة التي تعزز التنقل المريح والمستدام لجميع سكان المدينة.",
      image: img1,
    },
  ];

  const categories = [...new Set(services.map((service) => service.type))];

  const filteredServices = services.filter(
    (service) => service.type === activeType
  );

  return (
    <div className="mt-4">
      <div className="services-tabsBtns">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeType === category
                ? "services-custom-active-btn"
                : "services-custom-inactive-btn"
            }
            onClick={() => setActiveType(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Row className="myRow">
        {filteredServices.map((service) => (
          <div key={service.id} className="mb-4 services-col d-block ">
            <card className="services-card">
              <div className="g-0 services-cardRow d-flex flex-row ">

                <div>
                  <img
                    className="services-CardImg"
                    src={service.image}
                    alt={service.title}
                  />
                </div>

                <div className="services-Box ">
                  <div className="d-flex justify-content-start p-3">
                    <header className="services-CardTitle flex-grow-1">
                      {service.title}
                    </header>
                    <button className="services-cardBtn">تعديل</button>
                    <button className="services-cardBtn2">حذف</button>
                  </div>

                  <Card.Text className="servicesDate">
                    &#8226; {service.date}
                  </Card.Text>
                  <Card.Text className="services-CardText">
                    {service.description}
                  </Card.Text>
                </div>
              </div>
            </card>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default CurrentServices;
