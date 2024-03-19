import React, { useState, useEffect } from 'react';
import { marked } from 'marked';  // new way to do marked

function Work() {
    const [resumeHtml, setResumeHtml] = useState('');

    useEffect(() => {
        fetch('/resume.md')
            .then(response => response.text())
            .then(text => setResumeHtml(marked.parse(text))); // Use marked.parse() to convert Markdown to HTML
    }, []);

    return (
        <div>
            <h3>Resume</h3>
            <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
        </div>
    );
}

export default Work;