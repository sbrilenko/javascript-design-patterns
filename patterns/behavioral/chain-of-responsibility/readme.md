# Цепочка обязаностей / Chain of Responsibility

Можно избежать жесткой зависимости отправителя запроса от его получателя, при этом запросом начинает обрабатываться один из нескольких объектов. Объекты-получатели связываются в цепочку и запрос передается по цепочке, пока какой-то объект его не обработает.