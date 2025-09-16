import PupusaCard from "./PupusaCard";
import { pupusas } from "@/data/pupusas";

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras Deliciosas{" "}
            <span className="text-golden">Pupusas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hechas con amor y tradición familiar. Cada pupusa es preparada al momento 
            con ingredientes frescos y auténticos de la región.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pupusas.map((pupusa, index) => (
            <div 
              key={pupusa.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PupusaCard pupusa={pupusa} />
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-primary">
            ¿Sabías que...?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl mb-2">🌽</div>
              <p>
                <strong>Masa de maíz molida diariamente con técnicas familiares.</strong>
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🧀</div>
              <p>
                <strong>Queso de productores locales de Jutiapa para un sabor natural y de casa.</strong>
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔥</div>
              <p>
                <strong>Hechas en comal y a mano que le da ese sabor único e inigualable.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;