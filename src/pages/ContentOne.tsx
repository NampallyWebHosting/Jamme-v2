import React from "react";

const ContentOne: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  p-8 rounded-lg shadow-md z-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Content One</h2>
        <p className="mt-4 text-gray-600">
          This is Content One. It stays fixed at the center while the page scrolls.
        </p>
      </div>
    </div>
  );
};

export default ContentOne;
