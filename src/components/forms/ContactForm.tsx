'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        status: '',
        interest: '',
        country: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create WhatsApp message with form data
        const message = `Hi, I'm ${formData.name}.

📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
👤 Status: ${formData.status || 'Not specified'}
🌍 Target Country: ${formData.country || 'Not specified'}
📋 Interest: ${formData.interest || 'Not specified'}

Message:
${formData.message || 'No additional message'}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/923305060468?text=${encodedMessage}`, '_blank');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input
                    id="name" name="name" type="text" required
                    className={styles.input}
                    value={formData.name} onChange={handleChange}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                        id="email" name="email" type="email" required
                        className={styles.input}
                        value={formData.email} onChange={handleChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="phone">Phone (with country code)</label>
                    <input
                        id="phone" name="phone" type="tel" required
                        className={styles.input} placeholder="+92 300 ..."
                        value={formData.phone} onChange={handleChange}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="status">Current Status</label>
                    <select
                        id="status" name="status" className={styles.select}
                        value={formData.status} onChange={handleChange}
                    >
                        <option value="">Select...</option>
                        <option value="student">Student</option>
                        <option value="graduate">Graduate</option>
                        <option value="engineer">Engineer</option>
                        <option value="it_pro">IT Professional</option>
                        <option value="doctor">Doctor</option>
                        <option value="nurse">Nurse</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="country">Target Country</label>
                    <select
                        id="country" name="country" className={styles.select}
                        value={formData.country} onChange={handleChange}
                    >
                        <option value="">Select...</option>
                        <option value="germany">Germany</option>
                        <option value="sweden">Sweden</option>
                        <option value="finland">Finland</option>
                        <option value="norway">Norway</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="interest">Interested In</label>
                <select
                    id="interest" name="interest" className={styles.select}
                    value={formData.interest} onChange={handleChange}
                >
                    <option value="">Select...</option>
                    <option value="study">Study in Europe</option>
                    <option value="job_seeker">Job Seeker Visa</option>
                    <option value="medical">Medical Pathway</option>
                    <option value="visit">Visit Visa</option>
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="message">Message / Questions</label>
                <textarea
                    id="message" name="message" className={styles.textarea}
                    value={formData.message} onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
    );
}
