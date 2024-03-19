import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

function Work() {
    const [resumeHtml, setResumeHtml] = useState('');

    useEffect(() => {
        fetch('/resume.md')
            .then(response => response.text())
            .then(text => setResumeHtml(marked.parse(text)));
    }, []);

    return (
        <div>
            <h3 className="resume-heading">Resume</h3>
            <div className="resume-content" dangerouslySetInnerHTML={{ __html: resumeHtml }} />
        </div>
    );
}

export default Work;