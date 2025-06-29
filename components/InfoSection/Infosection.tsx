// components/InfoSection.tsx
const InfoSection: React.FC = () => {
    return (
      <section className="w-full max-w-4xl p-6 mx-auto my-12 bg-white rounded-lg shadow-md text-blue-500">
        <h2 className="text-4xl font-bold mb-6 text-center">About Phrehab</h2>
        <p className="text-lg leading-relaxed text-gray-700">
         For your physiotherapy needs come to Phrehab
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
        Drop us a message or book on the invite below.
        </p>
      </section>
    )
  }
  
  export default InfoSection