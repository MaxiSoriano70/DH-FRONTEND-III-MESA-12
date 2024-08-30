import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Formulario from "../components/Formulario";

describe("Testear Formulario", () =>{
    test("Validar entrada no reciba números", () =>{
        render(<Formulario/>);
        const inputAValidar = screen.getByTestId("inputSinNumeros");
        fireEvent.change(inputAValidar, {target: { value: "sape1234"}});
        expect(inputAValidar.validity.valid).toBe(false);
    });
    test("Validar la llamada del boton a la funcion", () => {
        const handleClick = vi.fn();
        render(<Formulario handleClick={handleClick} />);
        const botonEnviar = screen.getByText("Enviar");
        fireEvent.click(botonEnviar);
        expect(handleClick).toBeCalledTimes(1);
    })
});