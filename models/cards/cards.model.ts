import type { Card, CardInfo } from "../../types/types";

type PayloadMethod = Function;

interface ICardsModel {
  cards: Card[];
  preview: string | number;

  addCard(card: Card, payload?: PayloadMethod): void;
  removeCard(cardId: string, payload?: PayloadMethod): void;
  updateCard(cardId: string, payload?: PayloadMethod): void;
  getCards(cardId: string): Card;
  checkValidation(data: Record<keyof CardInfo, string>): boolean;
  setPreview(preview: string | number): void;
}

export class CardsModel implements ICardsModel {
  cards: Card[];
  preview: string | number;
  addCard(card: Card, payload?: PayloadMethod): void {
    throw new Error("Method not implemented.");
  }
  removeCard(cardId: string, payload?: PayloadMethod): void {
    throw new Error("Method not implemented.");
  }
  updateCard(cardId: string, payload?: PayloadMethod): void {
    throw new Error("Method not implemented.");
  }
  getCards(cardId: string): Card {
    throw new Error("Method not implemented.");
  }
  checkValidation(data: Record<keyof CardInfo, string>): boolean {
    throw new Error("Method not implemented.");
  }
  setPreview(preview: string | number): void {
    throw new Error("Method not implemented.");
  }
}
