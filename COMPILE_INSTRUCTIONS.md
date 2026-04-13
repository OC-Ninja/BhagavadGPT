# Research Paper Compilation Instructions

## Prerequisites

You need a LaTeX distribution installed on your system:

### Windows
- Install **MiKTeX**: https://miktex.org/download
- Or **TeX Live**: https://www.tug.org/texlive/

### Online Alternative (No Installation Required)
- Use **Overleaf**: https://www.overleaf.com/
- Upload `research_paper.tex` and `architecture_diagram.png`
- Click "Recompile"

## Files Required

Make sure these files are in the same directory:
1. `research_paper.tex` - The main LaTeX file
2. `architecture_diagram.png` - The system architecture diagram

## Compilation Steps

### Method 1: Command Line (After installing LaTeX)

```bash
# Run pdflatex twice (first for content, second for references)
pdflatex research_paper.tex
pdflatex research_paper.tex
```

This will generate `research_paper.pdf`

### Method 2: Using LaTeX Editor

1. Install **TeXstudio** (free): https://www.texstudio.org/
2. Open `research_paper.tex`
3. Press F5 or click the green arrow to compile
4. The PDF will be generated automatically

### Method 3: Overleaf (Recommended for Beginners)

1. Go to https://www.overleaf.com/
2. Create a free account
3. Click "New Project" → "Upload Project"
4. Upload both `research_paper.tex` and `architecture_diagram.png`
5. Click "Recompile" button
6. Download the PDF

## Before Submitting

### Update These Placeholders:

1. **Author Email** (Line 40):
   - Replace `aashrav.mail.id` with actual email

2. **References** (Lines starting with `\bibitem{placeholder}`):
   - Replace placeholder citations with actual research papers
   - Search Google Scholar for relevant papers on:
     - AI chatbots for religious guidance
     - RAG systems
     - Vector databases
     - Crisis intervention in AI

### Verify:

- [ ] Architecture diagram displays correctly
- [ ] All tables are properly formatted
- [ ] Code listings are readable
- [ ] References are numbered correctly
- [ ] No LaTeX errors in compilation log

## Common Issues

### Issue: "File architecture_diagram.png not found"
**Solution**: Make sure the PNG file is in the same folder as the .tex file

### Issue: "Undefined control sequence"
**Solution**: Run pdflatex twice - first run generates references

### Issue: Code looks weird with spaces
**Solution**: Already fixed with `columns=flexible` in lstset configuration

## Final Checklist

Before submission:
- [ ] Compile successfully without errors
- [ ] All author names and emails are correct
- [ ] Architecture diagram is clear and visible
- [ ] All tables and figures have captions
- [ ] References are properly formatted
- [ ] Abstract is under 250 words
- [ ] Paper follows IEEE conference format

## Contact

If you encounter any issues, check:
- LaTeX error log (look for lines starting with "!")
- Overleaf compilation logs (click on error messages)

Good luck with your submission! 🎓
