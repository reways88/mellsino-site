let balance = 100000;

function spinSlot() {
    if (balance >= 100) {
        balance -= 100;
        document.getElementById('balance').textContent = balance;

        const icons = ["🍒", "⭐", "💰", "🎲", "🍀", "💎"];
        let slot1 = icons[Math.floor(Math.random() * icons.length)];
        let slot2 = icons[Math.floor(Math.random() * icons.length)];
        let slot3 = icons[Math.floor(Math.random() * icons.length)];

        document.getElementById('slot1').textContent = slot1;
        document.getElementById('slot2').textContent = slot2;
        document.getElementById('slot3').textContent = slot3;

        document.querySelectorAll('.slot').forEach(slot => {
            slot.style.transform = "scale(1.2)";
            setTimeout(() => slot.style.transform = "scale(1)", 500);
        });

        if (slot1 === slot2 && slot2 === slot3) {
            balance += 1000000;
            document.getElementById('balance').textContent = balance;
            showFireworks();
        }
    } else {
        alert("Недостаточно M$ для игры!");
    }
}

function showFireworks() {
    const fireworks = document.getElementById('fireworks');
    fireworks.style.display = "block";
    setTimeout(() => fireworks.style.display = "none", 3000);
}
