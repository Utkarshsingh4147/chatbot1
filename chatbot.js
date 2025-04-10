// Chatbot functionality
const chatbot = document.getElementById('chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');

function toggleChatbot() {
    chatbot.style.display = 'block';
}

function closeChatbot() {
    chatbot.style.display = 'none';
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message to chat
    addMessage(message, 'user-message');
    userInput.value = '';

    // Process user message and generate bot response
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'bot-message');
    }, 500);
}

function addMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(className);
    messageElement.textContent = text;
    
    const messageContainer = document.createElement('div');
    messageContainer.style.display = 'flex';
    messageContainer.style.flexDirection = className === 'user-message' ? 'row-reverse' : 'row';
    messageContainer.style.margin = '0.5rem 0';
    messageContainer.appendChild(messageElement);
    
    chatbotMessages.appendChild(messageContainer);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! Welcome to FashionBot. How can I assist you today?";

    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
        return "Our prices range from ₹999.00 to ₹2499.00 depending on the item, offering up to 30% off on select items! Check the 'Offers' section ";

    } else if (lowerMessage.includes('size') || lowerMessage.includes('sizing')) {
        return "We offer sizes from XS to XL. Our size chart is available on each product page. Would you like help finding your size?";

    } else if (lowerMessage.includes('fit') || lowerMessage.includes('measurement') || lowerMessage.includes('chart')) {
        return "Our detailed size chart and fit guide can help you find the perfect match. Want help picking your size?";

    } else if (lowerMessage.includes('return') || lowerMessage.includes('exchange')) {
        return "We offer free returns within 30 days of purchase. Please keep the original tags attached and the item unworn.";

    } else if (lowerMessage.includes('refund')) {
        return "Refunds are processed within 5-7 business days once the return is received.";

    } else if (lowerMessage.includes('damaged')) {
        return "We're sorry about that! Please contact support with a photo and your order number, and we'll resolve it right away.";

    } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
        return "Standard shipping takes 3-5 business days. We also offer express shipping for an additional fee.";

    } else if (lowerMessage.includes('track') || lowerMessage.includes('status') || lowerMessage.includes('order')) {
        return "You can track your order by logging into your account and visiting the 'My Orders' section.";

    } else if (lowerMessage.includes('offer') || lowerMessage.includes('discount')) {
        return "We're currently offering up to 30% off on select items! Check the 'Offers' section on our homepage.";

    } else if (lowerMessage.includes('new') || lowerMessage.includes('arrival')) {
        return "Yes! We have some stylish new arrivals. Want to check them out?";

    } else if (lowerMessage.includes('trending') || lowerMessage.includes('bestseller')) {
        return "Our trending styles and bestsellers are super popular right now. Would you like to explore them?";

    } else if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
        return "We accept all major credit cards, PayPal, Apple Pay, and UPI.";

    } else if (lowerMessage.includes('cod') || lowerMessage.includes('cash on delivery')) {
        return "Yes, we offer Cash on Delivery for orders under ₹2,000.";

    } else if (lowerMessage.includes('promo') || lowerMessage.includes('coupon')) {
        return "You can apply your promo code during checkout in the 'Apply Coupon' section.";

    } else if (lowerMessage.includes('account') || lowerMessage.includes('login')) {
        return "You can log in or register from the top right corner of our website.";

    } else if (lowerMessage.includes('reset') || lowerMessage.includes('password')) {
        return "You can reset your password by clicking 'Forgot Password' on the login page.";

    } else if (lowerMessage.includes('gift')) {
        return "We offer stylish gift cards that can be emailed or printed — perfect for any occasion!";

    } else if (lowerMessage.includes('contact') || lowerMessage.includes('help') || lowerMessage.includes('support')) {
        return "You can reach our customer service team at support@fashionbot.com or call us at (555) 123-4567.";

    } else {
        return "I'm sorry, I didn't understand that. Could you rephrase your question? I can help with sizing, pricing, returns, and more!";
    }
}


// Handle Enter key press
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
