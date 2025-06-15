# 💱 Currency Converter

A modern, responsive web application for real-time currency conversion with an intuitive user interface and comprehensive currency support.

## ✨ Features

- **Real-time Exchange Rates** - Fetches live currency data from reliable API
- **150+ Currencies** - Support for major global currencies
- **Currency Swap** - One-click currency swapping functionality
- **Live Conversion** - Real-time updates as you type
- **Responsive Design** - Mobile-friendly interface
- **Input Validation** - Smart error handling and validation
- **Modern UI** - Clean, professional design with smooth animations
- **Keyboard Support** - Press Enter to convert currencies
- **Loading States** - Visual feedback during API calls

## 🚀 Demo

![Currency Converter Preview](https://via.placeholder.com/800x400/af4d98/ffffff?text=Currency+Converter+Demo)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and animations
- **Vanilla JavaScript** - ES6+ features with async/await
- **Font Awesome** - Icons
- **External APIs**:
  - [Currency API](https://github.com/fawazahmed0/currency-api) - Exchange rates
  - [Flags API](https://flagsapi.com/) - Country flags

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Open in browser**

   ```bash
   # Simply open index.html in your preferred browser
   open index.html

   # Or serve with a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🎯 Usage

1. **Enter Amount**: Input the amount you want to convert
2. **Select Currencies**: Choose source and target currencies from dropdowns
3. **Convert**: Click "Get Exchange Rate" or press Enter
4. **Swap**: Click the arrow icon to swap currencies instantly
5. **Real-time**: Type to see live conversion updates

## 📁 Project Structure

```
currency-converter/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── app.js              # Main application logic
├── codes.js            # Currency-to-country mapping
├── README.md           # Project documentation
└── .gitignore          # Git ignore rules
```

## 🔧 Configuration

### API Endpoints

The application uses the following APIs:

- **Exchange Rates**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`
- **Country Flags**: `https://flagsapi.com/{countryCode}/flat/64.png`

### Supported Currencies

The application supports 150+ currencies including:

- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- And many more...

## 💡 Key Features Explained

### Real-time Conversion

- Updates automatically as you type with a 500ms debounce
- Prevents unnecessary API calls for better performance

### Currency Swap

- Click the arrow icon between currency selectors
- Instantly swaps source and target currencies
- Updates flags and exchange rates automatically

### Input Validation

- Accepts only positive numbers
- Provides clear error messages
- Prevents invalid API requests

### Responsive Design

- Mobile-first approach
- Adapts to different screen sizes
- Touch-friendly interface

## 📝 Development Notes

- The application uses modern JavaScript features (ES6+)
- No external frameworks or libraries required
- Follows best practices for web development
- Implements proper error handling and user feedback

## 🐛 Known Issues

- Exchange rates are updated daily by the API provider
- Some exotic currency pairs might not be available
- Requires internet connection for real-time rates

## 🔮 Future Enhancements that can be developed

- [ ] Historical exchange rate charts
- [ ] Favorite currency pairs
- [ ] Offline mode with cached rates
- [ ] Currency trend indicators
- [ ] Multi-language support

## 👨‍💻 Author

**Your Name**

- GitHub: [jptlearn](https://github.com/yourusername)
- Email: jptcode500@gmail.com

## 🙏 Acknowledgments

- [Currency API](https://github.com/fawazahmed0/currency-api) for providing free exchange rate data
- [Flags API](https://flagsapi.com/) for country flag images
- [Font Awesome](https://fontawesome.com/) for icons

---

⭐ **Star this repository if you found it helpful!**
