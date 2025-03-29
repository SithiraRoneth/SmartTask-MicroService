/* Created By Sithira Roneth
 * Date :3/29/25
 * Time :15:22
 * Project Name :Smart_Task_Manage-MicroService
 * */
package lk.ijse.notificationservice.controller;

import lk.ijse.notificationservice.dto.NotificationRequest;
import lk.ijse.notificationservice.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping
    public String sendNotification(@RequestBody NotificationRequest notification) {
        notificationService.sendNotification(notification);
        return "Notification sent successfully";
    }
}
