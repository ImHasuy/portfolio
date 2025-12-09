import {Mail, MapPin, Phone} from "lucide-react";

export default function Contact() {


    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  Get In
                  <span className="text-primary"> Touch</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  If my work caught your interest or you’d like to collaborate, don’t hesitate to reach out. I’m open to new opportunities and eager to contribute. Whether it’s a project idea, an internship, or a job opportunity, I’d love to hear from you.
              </p>
              <div className="space-y-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                      <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-full bg-primary/10">
                              <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                              <h4 className="font-medium"> Email</h4>
                              <a href="mailto:csanad0502@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                  csanad0502@gmail.com
                              </a>
                          </div>
                      </div>

                      <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-full bg-primary/10">
                              <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                              <h4 className="font-medium"> Phone</h4>
                              <a href="tel:+36202731800" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                  +36 20 273 1800
                              </a>
                          </div>
                      </div>

                      <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-full bg-primary/10">
                              <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                              <h4 className="font-medium"> Location</h4>
                              <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                  Budapest, Hungary
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    )
}