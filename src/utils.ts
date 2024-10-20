const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;
if (!reviewTotalDisplay) throw new Error('Review total display not found.');

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;
if (!returningUserDisplay) throw new Error('Returning user display not found.');

const userNameDisplay = document.querySelector('#user') as HTMLElement;
if (!userNameDisplay) throw new Error('User name display not found.');

import { LoyaltyUser, Permissions } from './enums';
import { Review } from './interfaces';

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : ''; // Use isLoyalty instead
    reviewTotalDisplay.innerHTML = `${value} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = `${price}/night`;
        element.appendChild(priceDisplay);
    }
}

export function makeMultiple(value: number): string {
    return (value > 1 || value === 0) ? 's' : '';
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
