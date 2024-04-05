SELECT W1.id
FROM Weather W1
JOIN Weather W2
-- creates join table of w1.id.1 --> w2.id.2, w1.id.3 --> w2.id.2
ON W1.recordDate = W2.recordDate + 1
WHERE W1.temperature > W2.temperature;
