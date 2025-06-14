# Contributing to TL;DR AI

Thank you for your interest in contributing to TL;DR! We welcome contributions from everyone. 🎉

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/TLDR-P.git
   cd TLDR-P
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Set up** environment variables:
   ```bash
   cp .env.example .env.local
   # Add your Lyzr AI credentials to .env.local
   ```
5. **Start** development server:
   ```bash
   npm run dev
   ```

## 🛠️ Development Guidelines

### Code Style
- **TypeScript**: Use TypeScript for all new code
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Code formatting is handled by Prettier
- **Apple Design**: Follow Apple's design principles for UI components

### Commit Messages
Use conventional commits format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Example: `feat: add sentiment analysis visualization`

## 🎯 Ways to Contribute

### 🐛 Bug Reports
- Use the GitHub issue tracker
- Include steps to reproduce
- Provide system information
- Include screenshots if relevant

### 💡 Feature Requests
- Check existing issues first
- Describe the feature clearly
- Explain the use case
- Consider implementation approach

### 🔧 Code Contributions
- **UI Improvements**: Enhance the Apple-style design
- **AI Features**: Improve agent responses or add new analysis types
- **Performance**: Optimize loading times and responsiveness
- **Accessibility**: Improve WCAG compliance
- **Mobile**: Enhance mobile experience

### 📚 Documentation
- Improve README.md
- Add code comments
- Create tutorials
- Update API documentation

## 🧪 Testing

Before submitting a PR:
```bash
# Run linting
npm run lint

# Build the project
npm run build

# Test the build
npm start
```

## 📝 Pull Request Process

1. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make** your changes following the guidelines

3. **Test** your changes thoroughly

4. **Commit** with descriptive messages:
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push** to your fork:
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create** a Pull Request with:
   - Clear title and description
   - Screenshots for UI changes
   - Testing instructions
   - Link to related issues

## 🔒 Security

- Never commit API keys or secrets
- Use environment variables for sensitive data
- Report security issues privately to the maintainers

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🎨 Design Guidelines

### Apple-Style UI
- **Colors**: Use the defined CSS custom properties
- **Typography**: SF Pro Display font family
- **Spacing**: 24px rhythm for consistent layout
- **Interactions**: Subtle hover effects and micro-animations
- **Accessibility**: Ensure WCAG AA compliance

### Component Structure
- Use the existing design system
- Follow the established patterns
- Maintain consistency with shadcn/ui components

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **GitHub Profile**: Reach out to [@pr1ncegupta](https://github.com/pr1ncegupta)

## 🏆 Recognition

Contributors will be:
- Listed in the README.md
- Credited in release notes
- Invited to the contributors team

Thank you for making TL;DR better! 🚀

---

**Made with ❤️ by [Prince](https://github.com/pr1ncegupta)**
