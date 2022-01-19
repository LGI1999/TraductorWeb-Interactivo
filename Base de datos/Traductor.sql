
--xxxxxxxxxxxxxxxxxxxxxxxxxxxx Estructura de la base de datos xxxxxxxxxxxxxxxxxxxxxxxxxxxx--

CREATE DATABASE Traductor

--Todas las palabras a traducir
CREATE TABLE PalabrasIngles
(
	IdPalabraIngles int identity primary key,
	PalabraIngles varchar (80),
)

--Significados de las palabras a traducir, incluyendo sus traducciones al español y su forma en presente (si es que esta es un verbo en pasado)
CREATE TABLE Significados
(
	IdSignificados int identity primary key,
	IdPalabraIngles int FOREIGN KEY REFERENCES PalabrasIngles (IdPalabraIngles),

	PalabraInglesPresente varchar (80) NULL, --Palabra en presente (Solo se utilizara si se registro una palabra en pasado y se es necesario mostrar su forma en presente)

	SignificadoEspañol_1 varchar (80) NULL,
	SignificadoEspañol_2 varchar (80) NULL,
	SignificadoEspañol_3 varchar (80) NULL,
	SignificadoEspañol_4 varchar (80) NULL,
	SignificadoEspañol_5 varchar (80) NULL,
	SignificadoEspañol_6 varchar (80) NULL,
	SignificadoEspañol_7 varchar (80) NULL,
	SignificadoEspañol_8 varchar (80) NULL,
	SignificadoEspañol_9 varchar (80) NULL,
	SignificadoEspañol_10 varchar (80) NULL,

	Pagina int --Pagina (o grupo) a la cual pertenecen los significados. Esto se hace para poder llamar a los significados por grupos
)

--xxxxxxxxxxxxxxxxxxxxxxxxxxxx Procedimientos almacenados xxxxxxxxxxxxxxxxxxxxxxxxxxxx--

--Ingresa una nueva traduccion (una palabra en ingles y sus significados) sin verificar que la palabra que se intenta registrar haya sido registrada antes
CREATE PROCEDURE IngresarNuevaTraduccion
@palabraIngles varchar(80), @palabraInglesPresente varchar(80), @significadoEspañol_1 varchar(80),
@significadoEspañol_2 varchar(80), @significadoEspañol_3 varchar(80), @significadoEspañol_4 varchar(80),
@significadoEspañol_5 varchar(80), @significadoEspañol_6 varchar(80), @significadoEspañol_7 varchar(80),
@significadoEspañol_8 varchar(80), @significadoEspañol_9 varchar(80), @significadoEspañol_10 varchar(80),
@pagina int
AS
BEGIN
	--Primeramente registramos la nueva palabra en ingles
	INSERT INTO PalabrasIngles VALUES (@palabraIngles)

	--Ahora obtenemos el ID de la palabra recien ingresada 
	DECLARE  @idNuevaPalabra int = SCOPE_IDENTITY()

	--Registramos el significado de la palabra ingresada
	INSERT INTO Significados (IdPalabraIngles, PalabraInglesPresente, SignificadoEspañol_1, SignificadoEspañol_2, SignificadoEspañol_3,
	SignificadoEspañol_4, SignificadoEspañol_5, SignificadoEspañol_6, SignificadoEspañol_7, SignificadoEspañol_8, SignificadoEspañol_9,
	SignificadoEspañol_10, Pagina)
	VALUES (@idNuevaPalabra, @palabraInglesPresente, @significadoEspañol_1, @significadoEspañol_2, @significadoEspañol_3, @significadoEspañol_4,
	@significadoEspañol_5, @significadoEspañol_6, @significadoEspañol_7, @significadoEspañol_8, @significadoEspañol_9, @significadoEspañol_10,
	@pagina)
END
GO

--Actualiza todos los datos de una palabra. Desde su forma de escribirse hasta cada uno de sus significados
CREATE PROCEDURE ActualizarTraduccion
@palabraIngles varchar(80), @palabraInglesPresente varchar(80), @significadoEspañol_1 varchar(80),
@significadoEspañol_2 varchar(80), @significadoEspañol_3 varchar(80), @significadoEspañol_4 varchar(80),
@significadoEspañol_5 varchar(80), @significadoEspañol_6 varchar(80), @significadoEspañol_7 varchar(80),
@significadoEspañol_8 varchar(80), @significadoEspañol_9 varchar(80), @significadoEspañol_10 varchar(80),
@idPalabraActualizar int
AS
BEGIN
	--Primero actualizamos la palabra en ingles
	UPDATE PalabrasIngles SET PalabraIngles = @palabraIngles WHERE IdPalabraIngles = @idPalabraActualizar

	--Ahora actualizamos cada uno de sus significados
	UPDATE Significados SET PalabraInglesPresente = @palabraInglesPresente, SignificadoEspañol_1 = @significadoEspañol_1,
	SignificadoEspañol_2 = @significadoEspañol_2, SignificadoEspañol_3 = @significadoEspañol_3, SignificadoEspañol_4 = @significadoEspañol_4,
	SignificadoEspañol_5 = @significadoEspañol_5, SignificadoEspañol_6 = @significadoEspañol_6, SignificadoEspañol_7 = @significadoEspañol_7,
	SignificadoEspañol_8 = @significadoEspañol_8, SignificadoEspañol_9 = @significadoEspañol_9, SignificadoEspañol_10 = @significadoEspañol_10
	WHERE IdPalabraIngles = @idPalabraActualizar
END
GO

--xxxxxxxxxxxxxxxxxxxxxxxxxxxx Triggers xxxxxxxxxxxxxxxxxxxxxxxxxxxx--

--Borrara una palabra en ingles cuyos significados hayan sido borrados
CREATE TRIGGER EliminacionSignificados 
ON Significados
FOR DELETE
AS
BEGIN
	DECLARE @idPalabraBorrada int = (SELECT IdPalabraIngles FROM deleted)

	--Borramos todos los significados de la palabra 
	DELETE FROM PalabrasIngles WHERE IdPalabraIngles = @idPalabraBorrada
END
GO
