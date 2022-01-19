
--xxxxxxxxxxxxxxxxxxxxxxxxxxxx Estructura de la base de datos xxxxxxxxxxxxxxxxxxxxxxxxxxxx--

CREATE DATABASE Traductor

--Todas las palabras a traducir
CREATE TABLE PalabrasIngles
(
	IdPalabraIngles int identity primary key,
	PalabraIngles varchar (80),
)

--Significados de las palabras a traducir, incluyendo sus traducciones al espa�ol y su forma en presente (si es que esta es un verbo en pasado)
CREATE TABLE Significados
(
	IdSignificados int identity primary key,
	IdPalabraIngles int FOREIGN KEY REFERENCES PalabrasIngles (IdPalabraIngles),

	PalabraInglesPresente varchar (80) NULL, --Palabra en presente (Solo se utilizara si se registro una palabra en pasado y se es necesario mostrar su forma en presente)

	SignificadoEspa�ol_1 varchar (80) NULL,
	SignificadoEspa�ol_2 varchar (80) NULL,
	SignificadoEspa�ol_3 varchar (80) NULL,
	SignificadoEspa�ol_4 varchar (80) NULL,
	SignificadoEspa�ol_5 varchar (80) NULL,
	SignificadoEspa�ol_6 varchar (80) NULL,
	SignificadoEspa�ol_7 varchar (80) NULL,
	SignificadoEspa�ol_8 varchar (80) NULL,
	SignificadoEspa�ol_9 varchar (80) NULL,
	SignificadoEspa�ol_10 varchar (80) NULL,

	Pagina int --Pagina (o grupo) a la cual pertenecen los significados. Esto se hace para poder llamar a los significados por grupos
)

--xxxxxxxxxxxxxxxxxxxxxxxxxxxx Procedimientos almacenados xxxxxxxxxxxxxxxxxxxxxxxxxxxx--

--Ingresa una nueva traduccion (una palabra en ingles y sus significados) sin verificar que la palabra que se intenta registrar haya sido registrada antes
CREATE PROCEDURE IngresarNuevaTraduccion
@palabraIngles varchar(80), @palabraInglesPresente varchar(80), @significadoEspa�ol_1 varchar(80),
@significadoEspa�ol_2 varchar(80), @significadoEspa�ol_3 varchar(80), @significadoEspa�ol_4 varchar(80),
@significadoEspa�ol_5 varchar(80), @significadoEspa�ol_6 varchar(80), @significadoEspa�ol_7 varchar(80),
@significadoEspa�ol_8 varchar(80), @significadoEspa�ol_9 varchar(80), @significadoEspa�ol_10 varchar(80),
@pagina int
AS
BEGIN
	--Primeramente registramos la nueva palabra en ingles
	INSERT INTO PalabrasIngles VALUES (@palabraIngles)

	--Ahora obtenemos el ID de la palabra recien ingresada 
	DECLARE  @idNuevaPalabra int = SCOPE_IDENTITY()

	--Registramos el significado de la palabra ingresada
	INSERT INTO Significados (IdPalabraIngles, PalabraInglesPresente, SignificadoEspa�ol_1, SignificadoEspa�ol_2, SignificadoEspa�ol_3,
	SignificadoEspa�ol_4, SignificadoEspa�ol_5, SignificadoEspa�ol_6, SignificadoEspa�ol_7, SignificadoEspa�ol_8, SignificadoEspa�ol_9,
	SignificadoEspa�ol_10, Pagina)
	VALUES (@idNuevaPalabra, @palabraInglesPresente, @significadoEspa�ol_1, @significadoEspa�ol_2, @significadoEspa�ol_3, @significadoEspa�ol_4,
	@significadoEspa�ol_5, @significadoEspa�ol_6, @significadoEspa�ol_7, @significadoEspa�ol_8, @significadoEspa�ol_9, @significadoEspa�ol_10,
	@pagina)
END
GO

--Actualiza todos los datos de una palabra. Desde su forma de escribirse hasta cada uno de sus significados
CREATE PROCEDURE ActualizarTraduccion
@palabraIngles varchar(80), @palabraInglesPresente varchar(80), @significadoEspa�ol_1 varchar(80),
@significadoEspa�ol_2 varchar(80), @significadoEspa�ol_3 varchar(80), @significadoEspa�ol_4 varchar(80),
@significadoEspa�ol_5 varchar(80), @significadoEspa�ol_6 varchar(80), @significadoEspa�ol_7 varchar(80),
@significadoEspa�ol_8 varchar(80), @significadoEspa�ol_9 varchar(80), @significadoEspa�ol_10 varchar(80),
@idPalabraActualizar int
AS
BEGIN
	--Primero actualizamos la palabra en ingles
	UPDATE PalabrasIngles SET PalabraIngles = @palabraIngles WHERE IdPalabraIngles = @idPalabraActualizar

	--Ahora actualizamos cada uno de sus significados
	UPDATE Significados SET PalabraInglesPresente = @palabraInglesPresente, SignificadoEspa�ol_1 = @significadoEspa�ol_1,
	SignificadoEspa�ol_2 = @significadoEspa�ol_2, SignificadoEspa�ol_3 = @significadoEspa�ol_3, SignificadoEspa�ol_4 = @significadoEspa�ol_4,
	SignificadoEspa�ol_5 = @significadoEspa�ol_5, SignificadoEspa�ol_6 = @significadoEspa�ol_6, SignificadoEspa�ol_7 = @significadoEspa�ol_7,
	SignificadoEspa�ol_8 = @significadoEspa�ol_8, SignificadoEspa�ol_9 = @significadoEspa�ol_9, SignificadoEspa�ol_10 = @significadoEspa�ol_10
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
