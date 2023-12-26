// ElfSightWidget.js
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const ElfSightWidget = () => {
  useEffect(() => {
    if (window.elfsight) {
      window.elfsight.init();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        />
      </Helmet>
      <div  style={{width:"50px"}}
        className="elfsight-app-45cb1a0f-5a0b-4341-8290-4909a8e1ef57"
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default ElfSightWidget;
