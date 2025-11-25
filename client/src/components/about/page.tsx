export default function AboutSnippet() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
            More than just coffee
          </h2>
          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            Lens Café was born from a love of photography and perfect light. We
            designed every corner so your latte looks as good as it tastes — and
            your camera will thank you.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Come for the single-origin beans, stay for the golden hour that
            lasts all day.
          </p>
        </div>
        <img
          src="/images/interior.jpg"
          alt="Cozy interior of Lens Café"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}
