// Получаем элемент canvas по ID
const ctx = document.getElementById('platformChart').getContext('2d');

// Данные для диаграммы
const data = {
    labels: ['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
    datasets: [{
        label: 'Популярность игровых платформ',
        data: [40, 30, 15, 15], // Статичные данные
        backgroundColor: [
            'rgba(54, 162, 235, 0.7)',    // PC
            'rgba(255, 99, 132, 0.7)',    // PS5
            'rgba(255, 206, 86, 0.7)',    // Xbox
            'rgba(75, 192, 192, 0.7)'     // Switch
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

// Опции отображения
const options = {
    responsive: true,
    animation: {
        animateRotate: true,
        animateScale: true
    },
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#e0e6ed', // Цвет текста
                font: {
                    size: 14
                }
            }
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function(context) {
                    return `${context.label}: ${context.parsed}%`;
                }
            }
        }
    }
};

// Инициализация круговой диаграммы
const platformChart = new Chart(ctx, {
    type: 'doughnut', // Можешь заменить на 'pie', если нужен полный круг
    data: data,
    options: options
});
