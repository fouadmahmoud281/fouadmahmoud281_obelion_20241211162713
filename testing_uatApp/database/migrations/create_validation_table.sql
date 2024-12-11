CREATE TABLE Validation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  senderCode VARCHAR(255) NOT NULL,
  fileName VARCHAR(255) NOT NULL,
  fileSize INT NOT NULL CHECK (fileSize >= 1 AND fileSize <= 10485760),
  isValid BOOLEAN NOT NULL DEFAULT FALSE,
  validationMessage VARCHAR(255)
);

INSERT INTO Validation (senderCode, fileName, fileSize, isValid, validationMessage) VALUES
('SENDER1', 'file1.txt', 1024, TRUE, 'File is valid.'),
('SENDER2', 'file2.txt', 2048, FALSE, 'File is empty.'),
('SENDER3', 'file3.txt', 512, TRUE, 'File is valid.');

SELECT * FROM Validation;

UPDATE Validation
SET isValid = FALSE, validationMessage = 'File size exceeds the allowed limit.'
WHERE id = 1;

DELETE FROM Validation WHERE id = 2;
