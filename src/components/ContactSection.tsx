import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const openGoogleMaps = () => {
    // Coordenadas exactas: 14.27452, -90.04424
    const lat = 14.27452;
    const lng = -90.04424;
    // URL de navegación universal (Google Maps web)
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, '_blank');
  };

  const openWaze = () => {
    const lat = 14.27452;
    const lng = -90.04424;
    const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    window.open(wazeUrl, '_blank');
  };

  const callPhone = () => {
    window.open('tel:+50236525443');
  };

  return (
    <section id="contacto" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visítanos en{" "}
            <span className="text-golden">Nuestra Casa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te esperamos en el corazón de Aldea El Jocote, donde la tradición 
            familiar y el mejor sabor se encuentran.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-6">
            <Card className="golden-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-2">
                  Aldea El Jocote, Quesada
                </p>
                <p className="text-muted-foreground mb-4">
                  Jutiapa, Guatemala
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Button onClick={openGoogleMaps} variant="outline" className="w-full">
                    <Navigation className="mr-2 h-4 w-4" />
                    Ver en Google Maps
                  </Button>
                  <Button onClick={openWaze} variant="outline" className="w-full">
                    <Navigation className="mr-2 h-4 w-4" />
                    Ir ahora (Waze)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="golden-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Phone className="h-5 w-5" />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-4">
                  +502 3652-5443
                </p>
                <Button onClick={callPhone} variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="golden-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Martes - Domingo:</span>
                  <span className="font-medium">6:00 PM - 9:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-md">
                  <p className="text-sm text-primary font-medium">
                    ⏰ Las pupusas están frescas todo el día, pero recomendamos venir temprano para la mejor experiencia
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Información adicional (movida debajo del grid para centrar a nivel de página) */}
          </div>

          {/* Mapa embebido */}
          <div className="relative">
            <div className="bg-muted rounded-lg overflow-hidden shadow-lg h-[600px]">
              <iframe
                src={`https://www.google.com/maps?q=14.27452,-90.04424&z=16&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Doña Toya La Pupusería"
              />
            </div>
            
            {/* Overlay con información rápida */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs text-center">
              <h4 className="font-bold text-primary mb-2">Doña Toya La Pupusería</h4>
              <p className="text-sm text-muted-foreground">
                Aldea El Jocote, Quesada, Jutiapa
              </p>
              <div className="flex items-center space-x-1 mt-2 text-sm">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-muted-foreground">Abierto ahora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional centrada */}
        <div className="mt-6">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10 max-w-2xl mx-auto">
            <h3 className="font-bold text-lg mb-3 text-primary text-center">¿Cómo llegar?</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Desde Jutiapa: Tomar la carretera hacia Quesada (15 minutos)</p>
              <p>• Desde Guatemala: Carretera CA-1 hacia Jutiapa, luego a Quesada</p>
              <p>• Transporte público: Buses locales desde Jutiapa cada 30 minutos</p>
              <p>• Estacionamiento disponible frente al local</p>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-xl font-bold mb-3 text-primary text-center">
              ¡Te esperamos con los brazos abiertos!
            </h3>
            <p className="text-muted-foreground mb-4">
              Ven y disfruta de la verdadera experiencia de las pupusas tradicionales guatemaltecas. 
              Doña Toya y su familia estarán encantados de atenderte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;