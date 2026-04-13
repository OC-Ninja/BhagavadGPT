import { memo } from 'react';

/** Streaming cursor placeholder — no bottom margin to match Container's structure and prevent CLS */
const EmptyTextPart = memo(() => {
  return (
    <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible">
      <div className="markdown prose dark:prose-invert light w-full break-words dark:text-gray-100">
        <div className="relative">
          <p className="submitting relative">
            <span className="mr-1">Gitafying your question</span>
            <span className="result-thinking" />
          </p>
        </div>
      </div>
    </div>
  );
});

export default EmptyTextPart;
