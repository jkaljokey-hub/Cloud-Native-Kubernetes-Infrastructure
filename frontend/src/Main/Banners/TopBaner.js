import React from "react";
import { Button } from "react-bootstrap";

const TopBaner = () => {
  return (
    <div className="topbaner">
      <picture>
        {/* Tablet Image (min-width: 576px and max-width: 1024px) */}
        <source
          media="(min-width: 577px) and (max-width: 1024px)"
          srcSet="https://bouqs.com/media/W1siZiIsIjIwMjUvMDEvMjAvMTYvNTAvMzUvNGI4MDUwMzUtZDNmMi00N2Y5LThlOWItNTdhMTJhNDU4OTdlLzAxMjFfSFBVcGRhdGVfVkRheVNhbGUwOTA5X0hQUG9kX1N1YnNfVGFibGV0X0wuanBnIl0sWyJwIiwib3B0aW0iXV0/0121_HPUpdate_VDaySale0909_HPPod_Subs_Tablet_L.jpg?sha=7fde308253b6b25a"
         alt="sd"/>

        {/* Mobile Image (max-width: 576px) */}
        <source
          media="(max-width: 576px)"
          srcSet="https://bouqs.com/media/W1siZiIsIjIwMjUvMDEvMjAvMTYvNDkvMzUvZWMyODE2YjUtMDdjNy00MTA5LTgzZGUtMTc1OWViMGM1OTI4LzAxMjFfSFBVcGRhdGVfVkRheVNhbGUwOTA5X0hQUG9kX1N1YnNfTW9iaWxlLmpwZyJdLFsicCIsIm9wdGltIl1d/0121_HPUpdate_VDaySale0909_HPPod_Subs_Mobile.jpg?sha=f0639cc2314abb66"
          alt="sd" />

        {/* Default Image (Desktop) */}
        <img
          src="https://bouqs.com/cdn-cgi/image/quality=65,width=1536,format=auto/media/W1siZiIsIjIwMjUvMDEvMjAvMTYvNDcvNDgvMTk2NDlhZTUtYTQ1OS00OTZkLTkxMWItNzA1N2Q2NzJjODdiLzAxMjFfSFBVcGRhdGVfVkRheVNhbGVfSFBQb2RfU3Vic19EZXNrdG9wX0wuanBnIl0sWyJwIiwib3B0aW0iXV0/0121_HPUpdate_VDaySale_HPPod_Subs_Desktop_L.jpg?sha=1345adcdfaf409e5"
          alt="banner"
          className="topbaner-image"
        />
      </picture>

      <div className="overlay-text-banner">
        <p>45,000 5-STAR REVIEWS</p>
        <h1 className="largfont">Monthly Flower Subscription</h1>
        <p>
          Valentine's Day can last all year long with fresh flowers delivered on
          repeat
        </p>
        <Button>Start a Subscription</Button>
      </div>
    </div>
  );
};

export default TopBaner;
