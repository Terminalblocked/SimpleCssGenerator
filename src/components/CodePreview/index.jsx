import styles from "./CodePreview.module.scss";

function CodePreview({ topLeft, topRight, bottomLeft, bottomRight }) {
  const cssCode = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;

  return (
    <div>
      <h4>CSS Code:</h4>
      <pre>
        <code>{cssCode}</code>
      </pre>
    </div>
  );
}

export default CodePreview;