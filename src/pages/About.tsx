
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-muted-foreground mb-6">
              We're building the future of project management and team collaboration.
            </p>
            <p className="mb-4">
              Our mission is to help teams work more efficiently and effectively by providing 
              intuitive tools that simplify complex workflows and enhance productivity.
            </p>
            <p className="mb-4">
              Founded by a team of experienced developers and designers, we understand the 
              challenges modern teams face in managing projects and staying aligned on goals.
            </p>
            <p>
              That's why we've created a platform that combines powerful functionality with 
              clean, user-friendly design - making it easy for teams of all sizes to collaborate 
              and achieve their objectives.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
