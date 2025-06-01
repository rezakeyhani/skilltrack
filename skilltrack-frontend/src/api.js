// src/api.js
const API_BASE_URL = 'http://localhost:8080/api'; // آدرس بک‌اند

// گرفتن همه مهارت‌ها
export async function fetchSkills() {
  const response = await fetch(`${API_BASE_URL}/skills`);
  if (!response.ok) throw new Error('خطا در دریافت مهارت‌ها');
  return await response.json();
}

// اضافه کردن مهارت جدید
export async function addSkill(skill) {
  const response = await fetch(`${API_BASE_URL}/skills`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(skill),
  });
  if (!response.ok) throw new Error('خطا در افزودن مهارت');
  return await response.json();
}

