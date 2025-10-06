import React from "react";
import Spinner from "react-bootstrap/Spinner";

/* eslint-disable react/prop-types */
function Loading({ isLoading, error, children }) {
 
  const typeElement = children?.type?.render?.displayName
  const renderElement = () => {
    if (typeElement === "Button") {
      const cloneButton = React.cloneElement(
        children,
        { disabled: isLoading },
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </>
      );
      
      return (
        <>
          {isLoading ? (
            cloneButton
          ) : error ? (
            <>
              {cloneButton}
              <p>{error}</p>
            </>
          ) : (
            children
          )}
          
        </>
      );
    }
    return (
      <>
        {isLoading ? (
          <p>Data is Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };
  
  return renderElement();
}

export default Loading;
