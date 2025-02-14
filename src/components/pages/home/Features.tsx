import dynamic from "next/dynamic";
import { features } from "@/static/Resource";
import { FaUser } from "react-icons/fa6";

const Spotlight = dynamic(
  () => import("@/components/reactbits/Components/SpotlightCard/SpotlightCard")
);

const Features = () => {
  return (
    <main className="py-16 space-y-12">
      <div>
        <h3>Fitur yang Dimiliki</h3>
        <p>
          Lorem ipsum dolor sit amet. 
          oh take me back to the night we met.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {features && features.map((feature, index) => (
          <Spotlight key={index}>
            <div className="space-y-4">
              <div className={`${feature.color}  w-max p-3 rounded-full`}>
                <FaUser size={24} />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </Spotlight>
        ))}
      </div>
    </main>
  );
};

export default Features;
